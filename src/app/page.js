import { Suspense } from 'react';
import URLParametersTable from './URLParametersTable';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Suspense fallback={<p>Loading...</p>}>
        <URLParametersTable />
        <h6 className="mt-24 underline decoration-[#46a0ae] font-semibold">For quick testing, click on:</h6>
        <ul className="list-disc">
          <li className="hover:underline hover:decoration-dotted"><a href='/'>No parameters</a></li>
          <li className="hover:underline hover:decoration-dotted"><a href='?a=1'>a = 1</a></li>
          <li className="hover:underline hover:decoration-dotted"><a href='?a=1&b=2'>a = 1, b = 2</a></li>
          <li className="hover:underline hover:decoration-dotted"><a href='?a=1&b=2&c=3'>a = 1, b = 2, c = 3</a></li>
        </ul>
      </Suspense>
    </main>
  );
}
