import { Metadata } from 'next';

// Utility function to capitalize the slug
const capitalizeSlug = (slug: string): string => {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
};

// Generate metadata dynamically based on the slug
type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    'use server';
    // read route params
    const { slug } = await params;

    return {
        title: `Blog - ${capitalizeSlug(slug)}`, // Capitalize the slug
        description: `Read the latest blog post: ${capitalizeSlug(slug)}`
    };
}

// Layout component
export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
