import { Injectable } from '@angular/core';
import { openDB } from 'idb';

@Injectable({
  providedIn: 'root',
})
export class OfflineService {
  private dbPromise;

  constructor() {
    this.dbPromise = openDB('collaborative-app', 1, {
      upgrade(db) {
        db.createObjectStore('content');
      },
    });
  }

  async saveContent(content: string) {
    const db = await this.dbPromise;
    db.put('content', content, 'editor');
  }

  async getContent() {
    const db = await this.dbPromise;
    return db.get('content', 'editor');
  }
}
