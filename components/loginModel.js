'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/components/loginForm"
import { SignUpForm } from "@/components/signupForm"

export function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] fancy-glass fancy-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center fancy-gradient bg-clip-text text-transparent fancy-text-glow">
            {activeTab === "login" ? "Login" : "Sign Up"}
          </DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-lg p-1">
            <TabsTrigger value="login" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300">Login</TabsTrigger>
            <TabsTrigger value="signup" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm onSuccess={onClose} />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm onSuccess={() => setActiveTab("login")} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

