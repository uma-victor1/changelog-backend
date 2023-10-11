import { log } from 'console'
import { Router } from 'express'

const router = Router()

/**
 * product routes
 */
router.get('/product', (req, res, next) => {
  res.status(200)
  res.json({ message: 'hello' })
})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.post('/product/', () => {})
router.delete('/product/:id', () => {})

/**
 * Update
 */

router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update/', () => {})
router.delete('/update/:id', () => {})

/**
 * update point
 */

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', () => {})
router.post('/updatepoint/', () => {})
router.delete('/updatepoint/:id', () => {})

export default router
