import { Metadata } from 'next';

// Utility function to capitalize the slug
const capitalizeSlug = (slug: string): string => {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
};

interface BlogProps {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

// Generate metadata dynamically based on the slug
export async function generateMetadata({ params }: BlogProps): Promise<Metadata> {
    const { slug } = params;

    return {
        title: `Blog - ${capitalizeSlug(slug)}`, // Capitalize the slug
        description: `Read the latest blog post: ${capitalizeSlug(slug)}`
    };
}
// app/login/layout.tsx
export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
