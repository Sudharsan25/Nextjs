import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// export const revalidate = 5;
// export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  // call unstable_noStore() inside component to set cache behavior to no-store
  // const response = await fetch('http://localhost:8080/messages', {
  //   cache: 'no-store' // default with nextjs14 is 'force-cachce'. For nextjs15 'no-store' is default behavior for cache with fetch requests
  // });


  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
