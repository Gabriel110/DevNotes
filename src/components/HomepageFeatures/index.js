import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Java',
    Svg: require('@site/static/img/java-original.svg').default,
    description: (
      <>
        Java é uma linguagem de programação orientada a objetos criada pela Sun Microsystems e atualmente mantida pela Oracle.
        Ela é multiplataforma, pois roda na JVM, permitindo executar o mesmo código em diferentes sistemas operacionais.
        Java é amplamente utilizado em sistemas corporativos, APIs, aplicações Android e frameworks como Spring Boot.
        É uma linguagem robusta, segura e muito presente no mercado de desenvolvimento de software.
      </>
    ),
  },
  {
    title: 'Python',
    Svg: require('@site/static/img/python-original.svg').default,
    description: (
      <>
        Python é uma linguagem de programação de alto nível criada por Guido van Rossum, conhecida por sua sintaxe simples e fácil de aprender.
        É muito utilizada em áreas como automação, ciência de dados, inteligência artificial e desenvolvimento web com frameworks como Django.
        Python é multiplataforma, possui grande comunidade e é uma das linguagens mais populares do mundo atualmente.
      </>
    )
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6' +
      '')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--justify padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row margin--sm">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
