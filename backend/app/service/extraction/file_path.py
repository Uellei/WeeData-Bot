import os

class FilePath:
    base_path: str
    def __init__(self, base_path: str):
        self.base_path = base_path

    def get_script_path(self, file_name: str) -> str:
        return os.path.join(self.base_path, file_name)

class FilePathAdapter:
    def __init__(self, file_path: FilePath):
        self.file_path = file_path

    def get_script_path(self, file_name: str) -> str:
        return self.file_path.get_script_path(file_name)
