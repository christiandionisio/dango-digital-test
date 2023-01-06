import Head from 'next/head'
import React, { FC, ReactElement } from 'react'
import { Navbar } from '../ui/Navbar';

interface Props {
    children: ReactElement;
    title: string;
}

export const GeneralLayout: FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        
        <nav>
            <Navbar />
        </nav>

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            {children}
        </main>
    </>
  )
}
