"use client"; // Para garantir que o código seja executado no lado do cliente

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Button } from '@/components/ui/button';

const AccessoryButton = () => {
  const [pageUrl, setPageUrl] = useState('');
  const [isClient, setIsClient] = useState(false); // Estado para verificar se estamos no cliente

  useEffect(() => {
    // Verificando se o código está sendo executado no cliente
    setIsClient(true);

    // Apenas no cliente, capturamos a URL atual
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, []);

  if (!isClient) {
    // Enquanto o componente não foi montado no cliente, renderizamos null
    return null;
  }

  return (
    <Button variant="secondary" className="mt-3 w-full" asChild>
      <Link 
        href={`http://wa.me/5535984450066?text=Ol%C3%A1!+Eu+quero+o+acess%C3%B3rio:+${encodeURIComponent(pageUrl)}`}>
        Eu quero!
      </Link>
    </Button>
  );
};

export default AccessoryButton;
