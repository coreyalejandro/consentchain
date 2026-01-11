/**
 * MCP Context Manager
 *
 * Integrates with Anthropic's Model Context Protocol (MCP) to provide
 * rich contextual understanding for intention parsing. MCP enables
 * structured context sharing between AI systems and tools.
 */
import type { RawInput } from '../types/sec-spec.js';
/**
 * MCP Resource representation
 */
export interface MCPResource {
    readonly uri: string;
    readonly name: string;
    readonly description?: string;
    readonly mimeType?: string;
}
/**
 * MCP Tool definition
 */
export interface MCPTool {
    readonly name: string;
    readonly description: string;
    readonly inputSchema: Record<string, unknown>;
}
/**
 * MCP Server configuration
 */
export interface MCPServerConfig {
    readonly name: string;
    readonly version: string;
    readonly capabilities: {
        readonly resources?: boolean;
        readonly tools?: boolean;
        readonly prompts?: boolean;
    };
}
/**
 * Context factors extracted from MCP integration
 */
export interface ContextFactors {
    readonly availableTools: string[];
    readonly activeResources: string[];
    readonly sessionHistory: string[];
    readonly environmentFlags: Record<string, boolean>;
}
/**
 * MCP Context Manager - bridges ITAYN with the broader MCP ecosystem
 */
export declare class MCPContextManager {
    private resources;
    private tools;
    private sessionHistory;
    private serverConfig;
    constructor();
    /**
     * Get contextual factors relevant to an input
     */
    getContextualFactors(input: RawInput): Promise<string[]>;
    /**
     * Register an MCP resource
     */
    registerResource(resource: MCPResource): void;
    /**
     * Register an MCP tool
     */
    registerTool(tool: MCPTool): void;
    /**
     * Get server capabilities for MCP handshake
     */
    getServerInfo(): MCPServerConfig;
    /**
     * List available resources (MCP protocol method)
     */
    listResources(): MCPResource[];
    /**
     * List available tools (MCP protocol method)
     */
    listTools(): MCPTool[];
    /**
     * Read a resource by URI (MCP protocol method)
     */
    readResource(uri: string): Promise<string | null>;
    /**
     * Call a tool (MCP protocol method)
     */
    callTool(name: string, args: Record<string, unknown>): Promise<unknown>;
    private initializeDefaultResources;
    private initializeDefaultTools;
    private findRelevantTools;
    private findRelevantResources;
}
//# sourceMappingURL=mcp-context.d.ts.map