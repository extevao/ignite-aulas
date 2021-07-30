import { GetServerSideProps } from 'next'
import Head from 'next/head'

import styles from './home.module.scss'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>
          Home | ig.news
        </title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>&#x1F44F; Hey, welcome</span>
          <h1> News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1JIhntHYmqdYcRMtJ5RH9sqN')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100), // convertendo para "reais" pq o unit_amount vem em centavos
  }

  return {
    props: {
      product
    }
  }
}