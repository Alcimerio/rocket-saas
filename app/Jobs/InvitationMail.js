'use strict'

const Mail = use('Mail')

class InvitationMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'InvitationMail-job'
  }

  async handle ({ user, team, email }) {
    await Mail.send(
      ['emails.invitation'],
      { team: team.name, user: user.name },
      message => {
        message
          .to(email)
          .from('dev@saas.com.br', 'Saas | Project')
          .subject(`Convidado para o time ${team.name}!`)
      }
    )
  }
}

module.exports = InvitationMail
