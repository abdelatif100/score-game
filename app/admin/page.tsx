import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { LayoutDashboard, Gamepad2, Settings, LogOut } from "lucide-react"

export default async function AdminDashboard() {
  const session = await auth()

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Sidebar / Top Nav */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold">لوحة التحكم</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:inline">
                مرحباً، {session?.user?.name}
              </span>
              <form
                action={async () => {
                  "use server"
                  await signOut({ redirectTo: "/" })
                }}
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <LogOut className="w-4 h-4" />
                  تسجيل الخروج
                </Button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Console Management Card */}
          <Link href="/admin/consoles" passHref>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">إدارة الأجهزة</CardTitle>
                <Gamepad2 className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">تغيير حالة الأجهزة</div>
                <p className="text-xs text-muted-foreground pt-1">
                  تحديث حالة الأجهزة إلى "متوفر" أو "محجوز"
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Game Management Card */}
          <Link href="/admin/games" passHref>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">إدارة الألعاب</CardTitle>
                <Gamepad2 className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">إضافة وتعديل الألعاب</div>
                <p className="text-xs text-muted-foreground pt-1">
                  إدارة الكتالوج وتحديث وصف الألعاب
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Pricing Management Card */}
          <Link href="/admin/pricing" passHref>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">إعدادات الأسعار</CardTitle>
                <Settings className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">تعديل نصوص الأسعار</div>
                <p className="text-xs text-muted-foreground pt-1">
                  تغيير نصوص الأسعار التي تظهر للعملاء
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
