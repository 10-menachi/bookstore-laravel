'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const featuredBooks = [
    {
        id: 1,
        title: 'The Path to Success',
        author: 'Jane Smith',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
        category: 'Personal Growth',
    },
    {
        id: 2,
        title: 'Mindful Leadership',
        author: 'John Davis',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73',
        category: 'Business',
    },
    {
        id: 3,
        title: 'Digital Transformation',
        author: 'Sarah Johnson',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
        category: 'Technology',
    },
];

export default function FeaturedBooks() {
    const { toast } = useToast();

    const handleAddToCart = (bookId: number) => {
        toast({
            title: 'Added to cart',
            description: 'The book has been added to your cart.',
        });
    };

    return (
        <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Featured Books
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuredBooks.map((book) => (
                        <Card key={book.id} className="overflow-hidden">
                            <CardHeader className="p-0">
                                <div className="relative h-[300px]">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="object-cover"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <Badge className="mb-2">{book.category}</Badge>
                                <h3 className="mb-2 text-xl font-semibold">
                                    {book.title}
                                </h3>
                                <p className="text-muted-foreground mb-2">
                                    by {book.author}
                                </p>
                                <p className="text-lg font-bold">
                                    ${book.price}
                                </p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button
                                    className="w-full"
                                    onClick={() => handleAddToCart(book.id)}
                                >
                                    Add to Cart
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
