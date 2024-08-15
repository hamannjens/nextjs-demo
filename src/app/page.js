import URLParametersTable from './URLParametersTable';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <URLParametersTable />
      <h6 class="mt-24">For quick testing, click on:</h6>
      <ul class="list-disc">
        <li className="hover:underline"><a href='/'>No parameters</a></li>
        <li className="hover:underline"><a href='?a=1'>a = 1</a></li>
        <li className="hover:underline"><a href='?a=1&b=2'>a = 1, b = 2</a></li>
        <li className="hover:underline"><a href='?a=1&b=2&c=3'>a = 1, b = 2, c = 3</a></li>
      </ul>
    </main>
  );
}
