// src/components/PostsList.tsx
'use client';

import { useGetPostsQuery } from '@/services/postsApi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function PostsList() {
  const { data: banks, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3 p-4">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="p-4 text-red-500">Ocorreu um erro ao carregar os dados. Por favor, tente novamente.</div>;
  }

  if (!banks) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {banks.map((bank, index) => (
        <Card key={bank.code || index}> {/* Use o 'code' se existir, caso contrário, use o 'index' */}
          <CardHeader>
            <CardTitle>{bank.fullName}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Nome: {bank.name}</p>
            <p>Código: {bank.code}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}