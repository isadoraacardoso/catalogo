"use client"; // Adiciona essa linha para o Client Component

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Button } from '@/components/ui/button';

const AccessoryButton = () => {
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    // Apenas no cliente, capturamos a URL atual
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, []);

  return (
    <Button variant="secondary" className="mt-3 w-full" asChild>
      <Link 
        rel="stylesheet" 
        href={`http://wa.me/5535984450066?text=Ol%C3%A1!+Eu+quero+o+acess%C3%B3rio:+${encodeURIComponent(pageUrl)}`}>
        Eu quero!
      </Link>
    </Button>
  );
};

export default AccessoryButton;
