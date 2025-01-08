'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useTransition } from 'react'
import { logout } from '../app/actions'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const LogoutButton = () => {
        const [isPending, startTransition] = useTransition()

        return (
            <Button
                variant="ghost"
                className="text-primary hover:text-accent"
                onClick={() => startTransition(() => logout())}
                disabled={isPending}
            >
                {isPending ? 'Logging out...' : 'Log out'}
            </Button>
        )
    }

    return (
        <nav className="bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold text-primary">
                                AI-SDLC Manager
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link href="/projects" className="text-primary hover:text-accent inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-accent text-sm font-medium">
                                Projects
                            </Link>
                            <Link href="/tasks" className="text-primary hover:text-accent inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-accent text-sm font-medium">
                                Tasks
                            </Link>
                            <Link href="/team" className="text-primary hover:text-accent inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-accent text-sm font-medium">
                                Team
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <LogoutButton />
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <Button
                            variant="ghost"
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link href="/projects" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-primary hover:text-accent hover:bg-secondary hover:border-accent">
                            Projects
                        </Link>
                        <Link href="/tasks" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-primary hover:text-accent hover:bg-secondary hover:border-accent">
                            Tasks
                        </Link>
                        <Link href="/team" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-primary hover:text-accent hover:bg-secondary hover:border-accent">
                            Team
                        </Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-secondary">
                        <div className="mt-3 space-y-1">
                            <LogoutButton />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
