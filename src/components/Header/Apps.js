import React from "react";

import MenuItem from "./MenuItem";
import styles from "./Header.module.scss";

const I18N = {
  en: {
    apps: "TAMTAM applications"
  },
  fr: {
    apps: "Applications TAMTAM"
  },
  nl: {
    apps: "TAMTAM-toepassingen"
  }
};

export default function Apps({ apps, language = "fr" }) {
  return (
    <MenuItem icon="Apps" className={styles.apps}>
      <div className={styles.socialLinksWrapper}>
        <div className={styles.socialLinksHeader}>{I18N[language]["apps"]}</div>
        <div className={styles.socialLinksBody}>
          <ul className={styles.appsContainer}>
            {apps.map(({ url, logo, name, id }) => (
              <li key={id} className={styles.appsColumn}>
                <a className={styles.appWrapper} href={url}>
                  <img alt="" src={`${logo}`} />
                  <div className={styles.appName}>{name}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MenuItem>
  );
}
