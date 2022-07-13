import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageImage from "../../components/PageImage";
import styles from "../../styles/Staff.module.scss";
import useIsSafari from "../../libs/useIsSafari";

type StaffProfileProps = {
  className: string;
  position: string;
  staffName: string;
  profile: string;
  message: string;
  url?: string;
};

function StaffProfile({ className, position, staffName, profile, message, url }: StaffProfileProps) {
  const isSafari = useIsSafari();
  return (
    <dl className={`${styles.profile} ${isSafari ? styles[`${className}_noWebp`] : styles[className]}`}>
      <div className={styles.profile_body}>
        <dt className={styles.profile_nameArea}>
          <span className={styles.profile_position}>{position}</span>
          <span className={styles.profile_name}>{staffName}</span>
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <img src="/img/icon_ig.svg" alt="bee_dandy instagram" width="40px" height="40px" />
            </a>
          )}
        </dt>
        <dd className={styles.profile_text}>
          <p>{profile}</p>
        </dd>
        <dd className={styles.profile_message}>
          <h2>お客様へのメッセージ</h2>
          <p>{message}</p>
        </dd>
      </div>
    </dl>
  );
}

function Staff() {
  return (
    <>
      <Head>
        <title>スタッフ一覧 | 男性専門美容室 Bee dandy</title>
        <meta
          name="description"
          content="新橋の男性専門美容室 Bee dandyで働くスタッフ一覧です。スタッフのプロフィールやお客様へのメッセージ、これまで手がけてきた事例をご紹介します。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <PageImage page="staff" />
        <div className={styles.contents}>
          <h1 className={styles.heading}>Staff</h1>
          <div className={styles.staff}>
            <StaffProfile
              className="matsui"
              position="オーナー"
              staffName="松井 祐太"
              profile={
                "福岡県出身。30才で上京し、某美容室でマネージャーとして活躍後、2021年にBee Groupを立ち上げる。\n超ポジティブ思考でこの人が登場すると周囲が明るくなるという不思議なパワーの持ち主。抜群のセンスと高い技術で、お客様の様々なニーズに応え続けている。"
              }
              message="お一人おひとりに「今までで一番いいね！」と言っていただけるよう、その人に合ったヘアスタイル、いや、絶対に似合うヘアスタイルを作り出し、家族、恋人、あなたに関わる方々に満足をご提供します！そのため薄毛や白髪のカバー、多少の無理難題（笑）にも解決策をご提示提案しますので、僕のセンスと技術を信じて、あなたの「こうなりたい！」をぜひお気軽にご相談ください！"
              url="https://www.instagram.com/beedandy_y.matsui_official/"
            />
            <section className={styles.voice}>
              <h2 className={styles.voice_title}>お客様VOICE</h2>
              <div className={styles.voice_body}>
                <ul className={styles.voice_list}>
                  <li>
                    <p>
                      少しイメチェンしてみたいと思い松井さんに相談したら、今までやったことのない前髪を上げるアップバングというスタイルを提案してもらった。思い切ってチャレンジしたら、妻から「カッコよくなったね！」と見直してもらった。自分がカッコよくなれたこともうれしいが、妻の機嫌がすこぶる良いという副次効果がありがたいですね（笑）（40代
                      エンジニア）
                    </p>
                  </li>
                  <li>
                    <p>
                      松井さん担当してもらってから職場の女性に話しかけられることが多くなったんです。髪質や季節感など計算してくれて、少しアレンジを加えていただくのでいつもカットしてもらうのが楽しみです。（30代
                      サービス業）
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className={styles.staff}>
            <StaffProfile
              className="takahashi"
              position="スタイリスト"
              staffName="高橋 凌"
              profile="神奈川県出身。20代半ばにして、1,000人以上もの従業員が在籍する某有名サロンで、第一線のスタイリストとして活躍。一人のお客様を仕上げまで担当できる環境を求め、転職を決意。一流店で培った技術はさすがで、切った時だけでなく、長くキープできる持ちの良いヘアカット、スタイリングが楽に短時間でキマるヘアスタイルを創り上げる。"
              message="イメチェンはお任せください！絶対にカッコよくします！「似合う」だけでなく、「自分に自信が持てる」ヘアスタイルをご提供します。好印象のメンズショートカットや、オシャレこなれ感が漂う波巻き、セクシーなツイスパなどのメンズパーマなど、さりげなく流行を取り入れたヘアスタイルで、あなたの魅力を最高に引き立てます！"
            />
            <section className={styles.voice}>
              <h2 className={styles.voice_title}>お客様VOICE</h2>
              <div className={styles.voice_body}>
                <ul className={styles.voice_list}>
                  <li>
                    <p>
                      初めて美容室を訪れた時に、自分に似合う髪型が分からず、どうリクエストしていいかも分かりませんでした。メンズショートで立ち上げる感じのヘアスタイルにしていただき、自分でもビックリするほど印象が変わりました。家族や友人からも喜んでもらえたのが嬉しくて、これからは少しオシャレに気を使ってみようと思っています。今後ともよろしくお願いします！（20代
                      大学院生）
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Staff;
