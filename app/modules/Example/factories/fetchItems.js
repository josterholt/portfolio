import httpGet from 'cerebral-module-http/get'
import copy from 'cerebral-addons/copy'

export default [
  [
    httpGet('/items.json'), {
      success: [
        () => { console.debug("fetched"); },
        copy('input:/result', 'state:/items')
      ],
      error: [
        copy('input:/result.message', 'state:/errorMessage')
      ]
    }    
  ]  
]