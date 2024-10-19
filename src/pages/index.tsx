import { promises as fs } from 'fs'

import MainLayout from '@/components/Layouts/MainLayout/main-layout'

export const getStaticProps = async () => {
    const file: string = await fs.readFile(
        process.cwd() + '/json/data.json',
        'utf8'
    )
    const data = JSON.parse(file)

    return { props: { data } }
}

export default function Home({ data }: any) {
    console.log(data)

    return (
        <section className={'w-full h-screen bg-[#0E0E0E]'}>
            <MainLayout>
                <div
                    className={
                        'flex flex-col justify-center items-center h-screen text-white'
                    }
                >
                    <span>Product content</span>
                </div>
            </MainLayout>
        </section>
    )
}
