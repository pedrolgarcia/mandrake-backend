import 'reflect-metadata'
import { join } from 'path'
import execa from 'execa'
import getPort from 'get-port'
import { configure } from 'japa'
import sourceMapSupport from 'source-map-support'

process.env.NODE_ENV = 'testing'
process.env.ADONIS_ACE_CWD = join(__dirname)
sourceMapSupport.install({ handleUncaughtExceptions: false })

async function runMigrations() {
  await execa.node('ace', ['migration:run'], {
    stdio: 'inherit',
  })
}

async function dbSeed() {
  await execa.node('ace', ['db:seed'], {
    stdio: 'inherit',
  })
}
 
async function rollbackMigrations() {
  await execa.node('ace', ['migration:rollback'], {
    stdio: 'inherit',
  })
}

async function startHttpServer() {
  const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor')
  process.env.PORT = String(await getPort())
  await new Ignitor(__dirname).httpServer().start()
}

configure({
  files: ['__tests__/**/*.test.ts'],
  before: [
    rollbackMigrations,
    runMigrations,
    dbSeed,
    startHttpServer,
  ],
  after: [rollbackMigrations],
})