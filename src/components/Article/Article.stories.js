import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Article from './Article';

export const actions = {
    onLanguageChange: action('onLanguageChange'),
};

storiesOf('Article', module)
    .addDecorator(story => <div style={{ width: "25%", padding: '3rem' }}>{story()}</div>)
    .add('default', () => {
        return <Article
        article={{
          "id":3415,
          "title":"test save in S3",
          "language":"fr",
          "status":"PUBLISHED",
          "isPrivate":false,
          "authorsNames":"Emmanuel Degrève ",
          "isExternal":false,
          "externalUrl":"",
          "shortUrl":"bit.ly/2A5DE8T",
          "fluxType":"FLUX",
          "csScope":"INTRA_SHARE",
          "countLikes":1,
          "countDislikes":0,
          "countComments":3,
          "createdAt":"2019-09-11 14:14:16",
          "publishedAt":"2019-09-11 14:12:00",
          "updatedAt":"2019-09-11 14:14:16",
          "introduction":"Quu0027est-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux texte employu00e9 dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de lu0027imprimerie depuis les annu00e9es 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour ru00e9aliser un livre spu00e9cimen de polices de texte. Il nu0027a pas fait que survivre cinq siu00e8cles,...",
          "url":"test-save-in-s3",
          "main_media": {
            "inHistory":false,
            "type":"IMAGE",
            "name":"52Neyron-Sejour.jpg",
            "isAttachment":false,
            "isMain":true,
            "embedUrl":"",
            "yPos":1,
            "yHeight":0,
            "rgb":"",
            "id":5671,
            "uid":"681C8174-8B2C-4116-B5FD-6F4F80949170",
            "path":"36cb76d54b885bb567325d1f9acbaa97d501caac.jpeg",
            "mainFilename":"36cb76d54b885bb567325d1f9acbaa97d501caac.jpeg",
            "titleEn":"",
            "titleFr":"test save in S3",
            "titleNl":"",
            "descriptionEn":"",
            "descriptionFr":"",
            "descriptionNl":"",
            "altEn":"",
            "altFr":"Quu0027est-ce que le Lorem Ipsum?Le Lorem Ipsum est simplement du faux texte employu00e9 dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de lu0027imprimerie depuis les annu00e9es 1500, quand ",
            "altNl":"",
            "copyrightEn":"",
            "copyrightFr":"",
            "copyrightNl":"",
            "objectType":"ARTICLE",
            "objectId":3415,
            "isPrivate":0,
            "mediaStatus":"PUBLISHED",
            "extraData": {
              "isExternal":0,
              "url":"test-save-in-s3",
              "category":{
                "nameEn":"Apps, Cloud u0026 Digital",
                "nameFr":"Apps, Cloud u0026 Digital",
                "nameNl":"Apps, Cloud u0026 Digital",
                "color":"#8fbe45"
              }
            },
            "languages":"fr",
            "docType":"IMAGE",
            "inTheNews":false,
            "countLikes":0,
            "countDislikes":0,
            "countComments":1,
            "csScope":"INTRA_SHARE",
            "createdAt":"2018-09-11 14:14:16",
            "updatedAt":"2019-09-11 14:14:24",
            "publishedAt":null,
            "meta":[],
            "webPath":"storage/uploads/blog/media-article/36cb76d54b885bb567325d1f9acbaa97d501caac.jpeg",
            "fullMediaUrl":"https://s3.eu-west-1.amazonaws.com/tamtam/local/storage/media/IMAGE/5671/36cb76d54b885bb567325d1f9acbaa97d501caac.jpeg"
          },
          "category":{
            "colorCode":"#8fbe45",
            "id":5,
            "nameFr":"Apps, Cloud u0026 Digital",
            "nameEn":"Apps, Cloud u0026 Digital",
            "nameNl":"Apps, Cloud u0026 Digital",
            "idInFlux":48
          },
          "tags":[
            {
              "nameFr":"Baisse de lu0027impu00f4t",
              "nameEn":"",
              "nameNl":"",
              "sanitizedNameFr":"taxe sur les grandes fortunes",
              "counter":11,
              "isAbbreviation":false,
              "isUniversal":false,
              "isSuperTag":false,
              "isSynonym":false,
              "isHandled":false,
              "status":"0",
              "id":243,
              "idInFlux":2087,
              "createdAt":"2015-05-05 00:00:00",
              "synonymsCount":0
            },{
              "nameFr":"Capital",
              "nameEn":"Capital",
              "nameNl":"Vermogen",
              "sanitizedNameFr":"taux garanti",
              "counter":24,
              "isAbbreviation":false,
              "isUniversal":false,
              "isSuperTag":false,
              "isSynonym":false,
              "isHandled":true,
              "status":"0",
              "id":408,
              "idInFlux":1584,
              "createdAt":"2015-05-05 00:00:00",
              "synonymsCount":0
            }
          ],
          "author":[
            {
              "firstName":"Emmanuel",
              "lastName":"Degru00e8ve",
              "description":"",
              "metas":{
                "quote":{
                  "en":"citation lorum epsum",
                  "fr":"Lu2019amour commence par soi. lorsque votre relation avec vous-mu00eame est fondu00e9e sur lu2019amour et le respect, toutes vos relations changent.",
                  "nl":"citation lorum epsum"
                },
                "organization":{
                  "name":"org7",
                  "url":"http://www.google.com",
                  "path":"http://api2.tamtam.pro/storage/uploads/folders/4/AVATAR_00e0170bb5fc8a8cae3fd79abdc36c943669673b.png"
                }
              },
              "id":8650,
              "mainEmail":"emmanuel.degreve@degandpartners.com",
              "mainPhone":"+32486210211",
              "userMobilePhone":"",
              "avatar":"storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
              "avatarUrl":"https://s3.eu-west-1.amazonaws.com/tamtam/local/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
              "url":"emmanuel-degreve",
              "signature":{
                "title":"Emmanuel Degrève",
                "head":"Président"
              },
              "enableAvatar":true,
              "priority":0
            }
          ],
          "organization":{
            "id":4,
            "name":"DEG u0026 PARTNERS CONSULTING COMPANY",
            "abbreviation":"Deg u0026 Partners",
            "avatarWebPath":"storage/media/IMAGE/5399/AVATAR_2dac1051cb408f0778edb93fbf8009067d7e9d28.png",
            "avatarUrl":"https://s3.eu-west-1.amazonaws.com/tamtam/local/storage/media/IMAGE/5399/AVATAR_2dac1051cb408f0778edb93fbf8009067d7e9d28.png",
            "url":"deg-and-partners-consulting-company"
          },
          "social":{
            "isLiked":1,
            "isFavorite":1
          }
        }}
        community={{
          "id":4,
          "name":"DEG u0026 PARTNERS CONSULTING COMPANY",
          "abbreviation":"Deg u0026 Partners",
          "avatarWebPath":"storage/media/IMAGE/5399/AVATAR_2dac1051cb408f0778edb93fbf8009067d7e9d28.png",
          "avatarUrl":"https://s3.eu-west-1.amazonaws.com/tamtam/local/storage/media/IMAGE/5399/AVATAR_2dac1051cb408f0778edb93fbf8009067d7e9d28.png",
          "url":"deg-and-partners-consulting-company"
        }}
      />
    })
    // .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
    // .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
