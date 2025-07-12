"use client"
import { LoginForm } from "@/components/signup-form"
export default function SignUp() {
  
    
  return (
    
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
        </a>
        <LoginForm />
      </div>
    </div>
    
  )
}
