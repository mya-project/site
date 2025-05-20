import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import {
  CircleHelp,
  Check,
  Code,
  Lightbulb,
} from 'lucide-react';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<{size?: number}>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is Mya?',
    Icon: CircleHelp,
    description: (
      <>
        Mya is an easy to use formal language used to write the specification of a
        {" "}<a href="https://en.wikipedia.org/wiki/Instruction_set_architecture" target="_blank">Instruction Set Architecture</a> (ISA).
      </>
    ),
  },
  {
    title: 'Why use Mya?',
    Icon: Lightbulb,
    description: (
      <>
        <ul className={styles.iconList}>
          <li className={styles.iconListItem}>
            <Check size={18} className={styles.iconListItemIcon} />
            Easy to learn and read.
          </li>
          <li className={styles.iconListItem}>
            <Check size={18} className={styles.iconListItemIcon} />
            Is a formal way to document the ISA.
          </li>
          <li className={styles.iconListItem}>
            <Check size={18} className={styles.iconListItemIcon} />
            Auto-generate assembler and disassembler (coming soon).
          </li>
          <li className={styles.iconListItem}>
            <Check size={18} className={styles.iconListItemIcon} />
            Easy to use library for who want to do an amazing tool with Mya language.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Open Source',
    Icon: Code,
    description: (
      <>
        Mya Project is fully open source and always will be.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon size={48} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
