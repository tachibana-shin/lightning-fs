declare module '@isomorphic-git/lightning-fs' {
  class FS {
    /**
     * You can procrastinate initializing the FS object until later. And, if you're really adventurous, you can re-initialize it with a different name to switch between IndexedDb databases.
     */
    constructor()

    /**
     * First, create or open a "filesystem".
     * @param name This is used to determine the IndexedDb store name.
     * @param options The "filesystem" configuration.
     */
    constructor(name: string, options?: FS.Options)

    /**
     *
     * @param name This is used to determine the IndexedDb store name.
     * @param options The "filesystem" configuration.
     */
    init(name: string, options?: FS.Options): void

    /**
     * Make directory
     * @param filepath
     * @param options
     * @param cb
     */
    mkdir(filepath: string, options: FS.MKDirOptions | undefined, cb: (err: Error) => void): void

    /**
     * Remove directory
     * @param filepath
     * @param options
     * @param cb
     */
    rmdir(filepath: string, options: undefined, cb: (err: Error) => void): void

    /**
     * Read directory
     *
     * The callback return value is an Array of strings. NOTE: To save time, it is NOT SORTED. (Fun fact: Node.js' readdir output is not guaranteed to be sorted either. I learned that the hard way.)
     * @param filepath
     * @param options
     * @param cb
     */
    readdir(filepath: string, options: undefined, cb: (err: Error, files: string[]) => void): void

    writeFile(filepath: string, data: Uint8Array | string, options: FS.WriteFileOptions | undefined | string, cb: (err: Error) => void): void

    readFile(filepath: string, options: 'utf8' | { encoding: 'utf8' }, cb: (err: Error, data: string) => void): void
    readFile(filepath: string, options: {} | void, cb: (err: Error, data: Uint8Array) => void): void

    /**
     * Delete a file
     * @param filepath
     * @param options
     * @param cb
     */
    unlink(filepath: string, options: undefined, cb: (err: Error) => void): void

    /**
     * Rename a file or directory
     * @param oldFilepath
     * @param newFilepath
     * @param cb
     */
    rename(oldFilepath: string, newFilepath: string, cb: (err: Error) => void): void

    /**
     * The result is a Stat object similar to the one used by Node but with fewer and slightly different properties and methods.
     * @param filepath
     * @param options
     * @param cb
     */
    stat(filepath: string, options: undefined, cb: (err: Error, stats: FS.Stats) => void): void

    /**
     * Like fs.stat except that paths to symlinks return the symlink stats not the file stats of the symlink's target.
     * @param filepath
     * @param options
     * @param cb
     */
    lstat(filepath: string, options: undefined, cb: (err: Error, stats: FS.Stats) => void): void

    /**
     * Create a symlink at filepath that points to target.
     * @param target
     * @param filepath
     * @param cb
     */
    symlink(target: string, filepath: string, cb: (err: Error) => void): void

    /**
     * Read the target of a symlink.
     * @param filepath
     * @param options
     * @param cb
     */
    readlink(filepath: string, options: undefined, cb: (err: Error, linkString: string) => void): void

    /**
     * Create or change the stat data for a file backed by HTTP. Size is fetched with a HEAD request. Useful when using an HTTP backend without urlauto set, as then files will only be readable if they have stat data. Note that stat data is made automatically from the file /.superblock.txt if found on the server. /.superblock.txt can be generated or updated with the included [standalone script](https://github.com/isomorphic-git/lightning-fs/blob/main/src/superblocktxt.js).
     * @param filepath
     * @param options
     * @param cb
     */
    backFile(filepath: string, options: FS.BackFileOptions | undefined, cb: (err: Error) => void): void

    /**
     * Returns the size of a file or directory in bytes.
     * @param filepath
     * @param cb
     */
    du(filepath: string, cb: (err: Error, size: number) => void): void

    readonly promises: FS.PromisifiedFS
  }
  namespace FS {
    export class PromisifiedFS {
      /**
       *
       * @param name This is used to determine the IndexedDb store name.
       * @param options The "filesystem" configuration.
       */
      init(name: string, options?: FS.Options): void

      /**
       * Make directory
       * @param filepath
       * @param options
       */
      mkdir(filepath: string, options?: FS.MKDirOptions): Promise<void>

      /**
       * Remove directory
       * @param filepath
       * @param options
       */
      rmdir(filepath: string, options?: undefined): Promise<void>

      /**
       * Read directory
       *
       * The Promise return value is an Array of strings. NOTE: To save time, it is NOT SORTED. (Fun fact: Node.js' readdir output is not guaranteed to be sorted either. I learned that the hard way.)
       * @param filepath
       * @param options
       * @returns The file list.
       */
      readdir(filepath: string, options?: undefined): Promise<string[]>

      writeFile(filepath: string, data: Uint8Array | string, options?: FS.WriteFileOptions | string): Promise<void>

      readFile(filepath: string, options: 'utf8' | { encoding: 'utf8' }): Promise<string>
      readFile(filepath: string, options?: {}): Promise<Uint8Array>

      /**
       * Delete a file
       * @param filepath
       * @param options
       */
      unlink(filepath: string, options?: undefined): Promise<void>

      /**
       * Rename a file or directory
       * @param oldFilepath
       * @param newFilepath
       */
      rename(oldFilepath: string, newFilepath: string): Promise<void>

      /**
       * The result is a Stat object similar to the one used by Node but with fewer and slightly different properties and methods.
       * @param filepath
       * @param options
       */
      stat(filepath: string, options?: undefined): Promise<FS.Stats>

      /**
       * Like fs.stat except that paths to symlinks return the symlink stats not the file stats of the symlink's target.
       * @param filepath
       * @param options
       */
      lstat(filepath: string, options?: undefined): Promise<FS.Stats>

      /**
       * Create a symlink at filepath that points to target.
       * @param target
       * @param filepath
       */
      symlink(target: string, filepath: string): Promise<void>

      /**
       * Read the target of a symlink.
       * @param filepath
       * @param options
       * @returns The link string.
       */
      readlink(filepath: string, options?: undefined): Promise<string>

      /**
       * Create or change the stat data for a file backed by HTTP. Size is fetched with a HEAD request. Useful when using an HTTP backend without urlauto set, as then files will only be readable if they have stat data. Note that stat data is made automatically from the file /.superblock.txt if found on the server. /.superblock.txt can be generated or updated with the included [standalone script](https://github.com/isomorphic-git/lightning-fs/blob/main/src/superblocktxt.js).
       * @param filepath
       * @param options
       */
      backFile(filepath: string, options?: FS.BackFileOptions): Promise<void>

      /**
       * @param filepath
       * @returns The size of a file or directory in bytes.
       */
      du(filepath: string): Promise<number>
      /**
       * Function that saves anything that need to be saved in IndexedBD or custom IDB object. Right now it saves SuperBlock so it's save to dump the object as dump it into a file (e.g. from a Browser)
       * @returns Promise that resolves when super block is saved to file
       */
       flush(): Promise<void>
    }

    export interface Options {
      /**
       * Delete the database and start with an empty filesystem
       * @default false
       */
      wipe?: boolean
      /**
       * Let readFile requests fall back to an HTTP request to this base URL
       * @default false
       */
      url?: string
      /**
       * Fall back to HTTP for every read of a missing file, even if unbacked
       * @default false
       */
      urlauto?: boolean
      /**
       * Customize the database name
       */
      fileDbName?: string
      /**
       * Customize the store name
       */
      fileStoreName?: string
      /**
       * Customize the database name for the lock mutex
       */
      lockDbName?: string
      /**
       * Customize the store name for the lock mutex
       */
      lockStoreName?: string
      /**
       * If true, avoids mutex contention during initialization
       * @default false
       */
      defer?: boolean
      db: FS.IDB
    }
    export interface IDB {
      constructor(dbname: string, storename: string): IDB
      saveSuperblock(sb: Uint8Array): TypeOrPromise<void>
      loadSuperblock(): TypeOrPromise<FS.SuperBlock>
      loadFile(inode: number): TypeOrPromise<Uint8Array>
      writeFile(inode: number, data: Uint8Array): TypeOrPromise<void>
      wipe(): TypeOrPromise<void>
      close(): TypeOrPromise<void>
    }
    type TypeOrPromise<T> = T | Promise<T>
    export type SuperBlock = Map<string | number, any>
    export interface MKDirOptions {
      /**
       * Posix mode permissions
       * @default 0o777
       */
      mode: number
    }
    export interface WriteFileOptions {
      /**
       * Posix mode permissions
       * @default 0o777
       */
      mode: number
      encoding?: 'utf8'
    }
    export interface ReadFileOptions {
      encoding?: 'utf8'
    }
    export interface Stats {
      type: 'file' | 'dir'
      mode: any
      size: number
      ino: any
      mtimeMs: any
      ctimeMs: any
      uid: 1
      gid: 1
      dev: 1
      isFile(): boolean
      isDirectory(): boolean
      isSymbolicLink(): boolean
    }
    export interface BackFileOptions {
      /**
       * Posix mode permissions
       * @default 0o666
       */
      mode: number
    }
  }
  export = FS
}

declare module '@isomorphic-git/lightning-fs/src/path' {
  namespace Path {
    function join(...parts: string[]): string
    function normalize(path: string): string
    function split(path: string): string[]
    function basename(path: string): string
    function dirname(path: string): string
    function resolve(...paths: string[]): string
  }
  export = Path
}
