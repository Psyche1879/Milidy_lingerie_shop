from dataclasses import dataclass
import os
from dotenv import load_dotenv

load_dotenv()


@dataclass
class BotConfig:
    token: str
    admin_chat_id: int


def load_config() -> BotConfig:
    return BotConfig(
        token=os.getenv("BOT_TOKEN"),
        admin_chat_id=int(os.getenv("ADMIN_CHAT_ID", 0))
    )
