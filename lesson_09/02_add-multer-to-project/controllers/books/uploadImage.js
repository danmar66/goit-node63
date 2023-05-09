const Book = require('../../models/book')
const path = require('path')
const fs = require('fs/promises')

const uploadImage = async (req, res, next) => {
  const { filename } = req.file
  const tmpPath = path.resolve(__dirname, '../../tmp', filename)
  const newPath = path.resolve(__dirname, '../../public', filename)

  try {
    await fs.rename(tmpPath, newPath)
  } catch (error) {
    await fs.unlink(tmpPath) // видаляємо файл в разі виникнення помилки
    throw error
  }

  const bookId = req.params.id
  const book = await Book.findByIdAndUpdate(
    bookId,
    {
      image: `public/${filename}`,
    },
    { new: true }
  )

  return res.json({ image: book.image })
}

module.exports = uploadImage
