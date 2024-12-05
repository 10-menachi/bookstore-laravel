import FeaturedBooks from '@/Components/FeaturedBooks';
import NewsletterSignup from '@/Components/NewsletterSignup';
import Testimonials from '@/Components/Testimonials';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import RootLayout from '@/Layouts/RootLayout';
import { Link } from '@inertiajs/react';
import { BookOpen, BookText, Star, Users } from 'lucide-react';

export default function Home() {
    return (
        <RootLayout>
            <div className="flex min-h-screen flex-col">
                {/* Hero Section */}
                <section className="relative flex h-[600px] items-center justify-center">
                    <div className="from-primary/90 to-primary/40 absolute inset-0 bg-gradient-to-r">
                        <img
                            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                            alt="Library background"
                            className="object-cover mix-blend-overlay"
                        />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 text-center text-white">
                        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                            Transform Your Life Through Knowledge
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
                            Discover our curated collection of life-changing
                            eBooks that will help you grow personally and
                            professionally.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" asChild>
                                <Link href="/books">Browse Books</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="text-black"
                            >
                                <Link href="/about">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-background py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-12 text-center text-3xl font-bold">
                            Why Choose Our eBooks?
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    icon: <BookOpen className="h-8 w-8" />,
                                    title: 'Expert Content',
                                    description:
                                        'Written by industry experts and thought leaders',
                                },
                                {
                                    icon: <BookText className="h-8 w-8" />,
                                    title: 'Multiple Formats',
                                    description:
                                        'Available in PDF, EPUB, and MOBI formats',
                                },
                                {
                                    icon: <Users className="h-8 w-8" />,
                                    title: 'Community',
                                    description:
                                        'Join our growing community of learners',
                                },
                                {
                                    icon: <Star className="h-8 w-8" />,
                                    title: 'Quality Assured',
                                    description:
                                        'Thoroughly reviewed and curated content',
                                },
                            ].map((feature, index) => (
                                <Card
                                    key={index}
                                    className="p-6 text-center transition-shadow hover:shadow-lg"
                                >
                                    <div className="text-primary mb-4 flex justify-center">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Books */}
                <FeaturedBooks />

                {/* Testimonials */}
                <Testimonials />

                {/* Newsletter Signup */}
                <NewsletterSignup />
            </div>
        </RootLayout>
    );
}
