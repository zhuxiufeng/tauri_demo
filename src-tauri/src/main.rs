#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs::{self, File};
use std::io::Write;

#[tauri::command]
fn write_to_file(content: String) -> Result<String, String> {
    let path = "output.txt";

    File::create(path)
        .and_then(|mut file| file.write_all(content.as_bytes()))
        .map_err(|e| e.to_string())?;

    fs::read_to_string(path).map_err(|e| e.to_string())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![write_to_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
