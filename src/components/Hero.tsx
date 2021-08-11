import styles from '../styles/components/hero.module.scss'

type Props = {
    title: string;
    type: string;
}

const Hero = ({ title, type }: Props) => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <h2>{title ? title : 'Build cool shit!'}</h2>
                    <h3>{type ? type : 'akcolades'}</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero