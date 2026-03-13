import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ShieldAlert, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            العودة للموقع الرئيسي
          </Link>
        </div>

        <Card className="shadow-lg border-2">
          <CardHeader className="text-center space-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-red-50 rounded-full">
                <ShieldAlert className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-gray-900">
              لوحة تحكم المسؤول
            </CardTitle>
            <CardDescription className="text-gray-500 font-medium pt-1">
              منطقة محظورة - للموظفين فقط
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 pt-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 leading-relaxed text-center">
              <p>
                فقط حسابات Google المعتمدة مسبقاً يمكنها الدخول.
              </p>
              <p className="mt-1 font-semibold">
                اتصل بمالك المتجر إذا كنت بحاجة إلى وصول.
              </p>
            </div>

            <form
              action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/admin" })
              }}
              className="pt-4"
            >
              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold gap-3 transition-all hover:scale-[1.01]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                تسجيل الدخول بواسطة Google
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-8">
            <div className="text-center text-xs text-muted-foreground">
              من خلال المتابعة، أنت توافق على شروط الاستخدام وسياسة الخصوصية.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
