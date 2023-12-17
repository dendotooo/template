import { Registry } from 'den.ooo'
import { GitHub, GitLab } from 'den.ooo/resolvers'

const registry = new Registry({
  domain: 'den.ooo', // < replace "den.ooo" with the domain of your app
  resolvers: [
    GitHub,
    GitLab
  ]
})

registry.serve()
