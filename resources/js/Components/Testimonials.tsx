import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Alex Thompson',
        role: 'Entrepreneur',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content:
            'The books available here have transformed my approach to business. Highly recommended!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Maria Garcia',
        role: 'Life Coach',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        content:
            'Outstanding quality content that has helped me grow both personally and professionally.',
        rating: 5,
    },
    {
        id: 3,
        name: 'David Chen',
        role: 'Student',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        content:
            'The variety of topics and expert insights have been invaluable in my learning journey.',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    What Our Readers Say
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="transition-shadow hover:shadow-lg"
                        >
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                        />
                                        <AvatarFallback>
                                            {testimonial.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4 flex">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="fill-primary text-primary h-4 w-4"
                                            />
                                        ),
                                    )}
                                </div>
                                <p className="text-muted-foreground">
                                    {testimonial.content}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
