// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 */
export default function JobsTemplate(manifest: Manifest) {
  manifest.addTemplate({
    name: 'Jobsx',
    fields:[
      // { name: 'jobTitle', type: CommonFieldTypes.SingleLineText },
      // { name: 'postedTime', type: CommonFieldTypes.SingleLineText },
      // { name: 'employer', type: CommonFieldTypes.SingleLineText },
      // { name: 'country', type: CommonFieldTypes.SingleLineText },
      { name: 'NavLinks', type: CommonFieldTypes.GeneralLink},
    ],
  });
}
