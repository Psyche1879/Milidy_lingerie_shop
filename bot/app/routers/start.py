from aiogram import Router
from aiogram.filters import CommandStart
from aiogram.types import Message

router = Router()


@router.message(CommandStart())
async def start_handler(message: Message):
    first_name = message.from_user.first_name or "друг"

    await message.answer(
        f"👋 {first_name}, добро пожаловать в наш магазин нижнего белья!\n\n"
        "🛍 Открывайте каталог и выбирайте идеальный комплект."
    )
