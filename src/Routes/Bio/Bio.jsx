import { useContext } from 'react'
import { useEffect } from 'react'
import UnderDevelopment from '../../Components/UnderDevelopment/UnderDevelopment'
import { AccentColorContext } from '../../context/accent-color-context'
import styles from './Bio.module.css'


export default function Bio() {
    const { updateAccentColor } = useContext(AccentColorContext);

    useEffect(() => {
        updateAccentColor('green')
    }, [])

    return (
        <>
            <h1>
                Biography
            </h1>
            <UnderDevelopment />
            <h2>
                James Napoletano
            </h2>
            <div className={styles.contentBox}>
                <div className={styles.leftPhoto}>
                    Current picture
                    <br />
                    of me
                </div>
                <p className={styles.bioText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec neque nunc. Mauris sagittis tempus ante, eu pulvinar velit imperdiet nec. Phasellus posuere vehicula risus, vel elementum ex sollicitudin eget. Sed molestie orci ut purus scelerisque, vitae varius libero aliquet. Vestibulum tincidunt erat id sagittis consequat. Aliquam nec fermentum nulla, rhoncus ornare est. Sed maximus mattis diam vel blandit. Nulla ac ex pretium risus congue elementum. Aenean ullamcorper purus suscipit porttitor feugiat. Quisque at tellus malesuada, mollis lectus et, auctor augue. Sed in ipsum ultrices, commodo eros non, lobortis dui.
                </p>
                <div className={styles.rightPhoto}>
                    Young picture
                    <br />
                    of me
                </div>
                <p className={styles.bioText}>
                    Mauris vitae dui placerat velit lobortis pharetra eu sed ex. Cras sed posuere ex, sit amet fringilla arcu. Nulla posuere urna in placerat scelerisque. Praesent fringilla mauris vitae commodo facilisis. Morbi at tristique nulla. Morbi porttitor id nulla vitae fermentum. Nulla euismod tincidunt ex luctus condimentum. Etiam eu condimentum nisi. Sed ultricies massa consequat nunc ornare, a varius eros fringilla. Pellentesque in orci ullamcorper, gravida orci non, fringilla metus. Sed blandit, nibh quis aliquet mattis, sapien mauris bibendum lorem, eu condimentum ipsum nunc sed odio. Integer aliquet ac tortor at hendrerit. Phasellus gravida dui a dui lacinia molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas quis consectetur mi, eu accumsan nulla.
                </p>
                <div className={styles.leftPhoto}>
                    High School
                    <br />
                    Picture of me
                </div>
                <p className={styles.bioText}>
                    Ut eget pretium nibh. Suspendisse quis felis est. Vivamus scelerisque neque nec efficitur sollicitudin. Quisque vehicula vulputate mi quis lobortis. Proin pulvinar felis vitae massa feugiat, ut tempor arcu fermentum. Nunc feugiat lectus vel dolor convallis, et tincidunt ligula tincidunt. Duis lorem sapien, consequat nec risus eu, porta placerat ex. In ullamcorper turpis eget ligula aliquet, a elementum turpis interdum. Proin vitae neque hendrerit, commodo dolor ac, pellentesque felis. Praesent id ultrices turpis. Sed et mi eros. Vestibulum commodo mauris quis tincidunt tempus. Sed molestie nunc vitae mauris viverra, nec condimentum nunc porttitor. Nullam hendrerit ex non risus sollicitudin sodales. Nullam ultrices a ante mollis pellentesque.
                </p>
                <div className={styles.rightPhoto}>
                    Think of a type
                    <br />
                    of picture for
                    <br />
                    here
                </div>
                <p className={styles.bioText}>
                    Ut molestie elit est, in rutrum nisl accumsan ut. Curabitur eu pretium elit, sit amet elementum ex. Nam finibus nunc sit amet dictum tempus. Vivamus commodo sem ac nunc egestas imperdiet dictum nec enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed aliquam nisi nibh, quis tristique sem molestie sit amet. Vestibulum sit amet nisl eget odio dictum cursus non eget diam.
                </p>
                <div className={styles.leftPhoto}>
                    Hobby Picture
                    <br />
                    of me
                </div>
                <p className={styles.bioText}>
                    Donec facilisis felis nec vulputate rhoncus. Duis eleifend lectus ut nunc porttitor condimentum. Pellentesque mollis nunc dui, ac scelerisque tortor ullamcorper vitae. Cras consequat, mi vitae lobortis aliquet, mauris arcu tempus justo, vitae tristique turpis metus in enim. Donec tristique, ex at malesuada molestie, elit metus scelerisque ligula, id fermentum est mi sodales erat. Pellentesque tempor, nisi vitae consequat eleifend, risus odio dignissim velit, ut fringilla neque est eleifend mi. Proin facilisis, lectus id viverra convallis, erat purus vulputate dolor, sit amet posuere neque neque ac eros. Pellentesque aliquet dolor sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tristique diam est, id condimentum erat hendrerit et. Fusce id placerat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dictum diam orci, quis vulputate diam tincidunt sed. Nunc sit amet enim neque. Quisque ultrices, ipsum et vehicula condimentum, sapien libero accumsan mauris, id egestas orci lacus sed ex. Integer a finibus tortor.
                </p>
            </div>
        </>
    )
}
