import Link from 'next/link';

export default function Intercept() {
  return (
    <>
      <h1 className='text-2xl'>Intercept Page</h1>
      <Link href='/intercept/ic1'>IC1</Link>
      <Link href='/intercept/ic2'>IC2</Link>
      <Link href='/intercept/ic3'>IC3</Link>
      <Link href='/hi/moring'>Morning</Link>
    </>
  );
}
