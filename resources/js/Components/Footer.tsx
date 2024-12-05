import { Link } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <BookOpen className="h-6 w-6" />
                            <span className="font-bold">BookWise</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Transforming lives through knowledge and personal
                            development.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/books"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Books
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/help"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} BookWise. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
