import { DetailDynamicPageSkeleton } from "@/components/main/DetailDynamicPageSkeleton";
import { Suspense } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense fallback={<DetailDynamicPageSkeleton />}>{children}</Suspense>
  );
}
