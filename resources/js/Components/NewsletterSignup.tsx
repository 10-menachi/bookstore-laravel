'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: 'Success!',
            description: 'Thank you for subscribing to our newsletter.',
        });
        setEmail('');
    };

    return (
        <section className="bg-primary text-primary-foreground py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
                <p className="mx-auto mb-8 max-w-2xl">
                    Subscribe to our newsletter and get exclusive access to new
                    releases, special offers, and expert insights.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto flex max-w-md gap-4"
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-primary-foreground text-primary"
                        required
                    />
                    <Button type="submit" variant="secondary">
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    );
}
