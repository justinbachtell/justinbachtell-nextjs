import { type HandleOAuthCallbackParams } from "@clerk/types";

import { Shell } from "@/components/shell";
import { SSOCallback } from "@/app/(auth)/_components/sso-callback";

export interface SSOCallbackPageProps {
  searchParams: Promise<HandleOAuthCallbackParams>;
}

export default async function SSOCallbackPage(props: SSOCallbackPageProps) {
  const searchParams = await props.searchParams;
  const params = await searchParams;

  return (
    <Shell className="max-w-lg">
      <SSOCallback searchParams={params} />
    </Shell>
  );
}
