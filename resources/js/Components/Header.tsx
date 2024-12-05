'use client';

import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Link } from '@inertiajs/react';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ModeToggle } from './ModeToggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
            <div className="container flex h-16 items-center p-10">
                <div className="mr-4 flex items-center space-x-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <BookOpen className="h-6 w-6" />
                        <span className="font-bold">BookWise</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="space-x-4">
                        <NavigationMenuItem>
                            <Link
                                href="/books"
                                className="text-foreground/60 hover:text-foreground"
                            >
                                Books
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="/blog"
                                className="text-foreground/60 hover:text-foreground"
                            >
                                Blog
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="/about"
                                className="text-foreground/60 hover:text-foreground"
                            >
                                About
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="/contact"
                                className="text-foreground/60 hover:text-foreground"
                            >
                                Contact
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex-1" />

                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    <Button variant="outline" className="hidden md:inline-flex">
                        Sign In
                    </Button>
                    <Button className="hidden md:inline-flex">
                        Get Started
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t md:hidden">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link
                            href="/books"
                            className="text-foreground/60 hover:text-foreground"
                        >
                            Books
                        </Link>
                        <Link
                            href="/blog"
                            className="text-foreground/60 hover:text-foreground"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/about"
                            className="text-foreground/60 hover:text-foreground"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-foreground/60 hover:text-foreground"
                        >
                            Contact
                        </Link>
                        <div className="flex flex-col space-y-2 border-t pt-4">
                            <Button variant="outline">Sign In</Button>
                            <Button>Get Started</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
