import Text from 'antd/lib/typography/Text';

export default function Home() {
  return (
    <div className='h-screen w-screen grid place-items-center'>
      <div className='flex flex-col items-center space-y-4'>
        <Text className='text-primary font-extrabold text-6xl tracking-widest'>
          NEXANTAIL JS
        </Text>

        <Text className='font-medium'>NEXT JS + TAILWIND + ANTD</Text>
      </div>
    </div>
  );
}
