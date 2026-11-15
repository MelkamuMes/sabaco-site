import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import {blockContentTextOnly} from './objects/blockContentTextOnly'

export const schemaTypes = [
  settings,
  page,
  post,
  person,
  button,
  blockContent,
  blockContentTextOnly,
  infoSection,
  callToAction,
  link,
]
