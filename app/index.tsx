import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Defer navigation to ensure the Root Layout is mounted
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 0);
    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
