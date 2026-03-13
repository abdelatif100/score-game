import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function PendingPage() {
  const session = await auth()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center" dir="rtl">
      <div className="max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">في انتظار الموافقة</h1>
        <p className="text-gray-600">
          مرحباً {session?.user?.name || "بك"}، لقد تم تسجيل حسابك بنجاح.
        </p>
        <p className="text-gray-500">
          يرجى التواصل مع صاحب المحل لتفعيل حسابك والوصول إلى لوحة التحكم.
        </p>
        
        <div className="flex flex-col gap-3 pt-4">
          <form
            action={async () => {
              "use server"
              await signOut({ redirectTo: "/" })
            }}
          >
            <Button variant="outline" className="w-full">
              تسجيل الخروج
            </Button>
          </form>
          <Link href="/" passHref>
            <Button variant="ghost" className="w-full">
              العودة للموقع الرئيسي
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
