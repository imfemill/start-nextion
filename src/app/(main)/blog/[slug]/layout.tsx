import { Metadata } from 'next';

// Utility to capitalize slug
const capitalizeSlug = (slug: string): string => {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
};

type Props = {
    params: Promise<{ slug: string }>; // params is a Promise
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params; // await the promise

    return {
        title: `Blog - ${capitalizeSlug(slug)}`,
        description: `Read the latest blog post: ${capitalizeSlug(slug)}`
    };
}

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
    //   const resolvedParams = await params;  // Await params in the component as well if needed

    return <>{children}</>;
}
