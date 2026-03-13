# Database Schema

This is the database schema implementation for the Admin Authentication & Approval flow.

## Schema Modifications

To support Auth.js and Prisma Adapter, we need to extend our `AdminUser` model or implement the standard Auth.js models (`Account`, `Session`, `User`, `VerificationToken`).

### Updated `AdminUser` Model

The current `AdminUser` table needs to be compatible with Auth.js. We will rename it to `User` (standard) and keep our custom fields.

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime? @map("email_verified")
  image         String?
  accounts      Account[]
  sessions      Session[]
  
  // Custom Store Admin fields
  isApproved    Boolean   @default(false) @map("is_approved")
  
  @@map("users")
}

model Account {
  id                 String  @id @default(cuid())
  userId             String  @map("user_id")
  type               String
  provider           String
  providerAccountId  String  @map("provider_account_id")
  refresh_token      String? @db.Text
  access_token       String? @db.Text
  expires_at         int?
  token_type         String?
  scope              String?
  id_token           String? @db.Text
  session_state      String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique @map("session_token")
  userId       String   @map("user_id")
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
  @@map("verification_tokens")
}
```

## Migration Rationale

- **Standard Models**: Adhering to the [Auth.js Prisma Schema](https://authjs.dev/reference/adapter/prisma) ensures perfect compatibility with the adapter.
- **`isApproved` Flag**: This custom boolean remains our source of truth for dashboard access.
- **Naming**: Renaming `AdminUser` to `User` simplifies the NextAuth configuration, but it will still represent the admin/employee accounts.
