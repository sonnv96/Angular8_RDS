import { Injectable } from '@angular/core';

import { FuseSidebarComponent } from './sidebar.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FuseSidebarService
{
    public onSidebarToggle: Subject<any> = new Subject;
    // Private
    private _registry: { [key: string]: FuseSidebarComponent } = {};

    /**
     * Constructor
     */
    constructor()
    {

    }

    /**
     * Add the sidebar to the registry
     *
     * @param key
     * @param sidebar
     */
    register(key, sidebar): void
    {
        // Check if the key already being used
        if ( this._registry[key] )
        {
            console.error(`The sidebar with the key '${key}' already exists. Either unregister it first or use a unique key.`);

            return;
        }

        // Add to the registry
        this._registry[key] = sidebar;
    }

    /**
     * Remove the sidebar from the registry
     *
     * @param key
     */
    unregister(key): void
    {
        // Check if the sidebar exists
        if ( !this._registry[key] )
        {
            console.error(`The sidebar with the key '${key}' doesn't exist in the registry.`);
        }

        // Unregister the sidebar
        delete this._registry[key];
    }

    /**
     * Return the sidebar with the given key
     *
     * @param key
     */
    getSidebar(key): any
    {
        // Check if the sidebar exists
        if ( !this._registry[key] )
        {
            console.error(`The sidebar with the key '${key}' doesn't exist in the registry.`);

            return;
        }

        // Return the sidebar
        return this._registry[key];
    }
}
