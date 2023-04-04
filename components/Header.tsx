import { Head } from "$fresh/runtime.ts";
export function Header() {
  return (
      <Head>
        <title>Mandarin Week 1</title>
        <link rel="stylesheet" href="/styles.min.css"></link>
        <link 
        rel="preconnect" 
        href="https://fonts.googleapis.com"
      />
      <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin="true"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        media="all"
      />
      </Head>
  );
}
